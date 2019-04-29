class Mic {
    constructor() {
        this.source;
        this.context;

        this.analyser;
        this.frequency;

        this.callback;
        this.setValue;
        this.interval = 1000 / 15;
        this.then = Date.now();

        this.animate = this.animate.bind(this);
        this.set = this.set.bind(this);
    }

    animate() {
        if (this.callback === null) {
            return;
        }

        this.callback = requestAnimationFrame(this.animate);
        const now = Date.now();
        const delta = now - this.then;
        if (delta <= this.interval) {
            return;

        }
        this.then = now - (delta % this.interval);
        this.analyser.getByteFrequencyData(this.frequency);
        const value = this.frequency.reduce((avg, slot) => avg + slot, 0) / this.frequency.length;
        const scaled = (value / 128) + 1;
        this.setValue(scaled);
    }

    set(stream) {
        this.context = new AudioContext();

        this.analyser = this.context.createAnalyser();
        this.analyser.fftSize = 512;
        this.analyser.minDecibels = -90;
        this.analyser.maxDecibels = -10;
        this.analyser.smoothingTimeConstant = 0.5;

        this.frequency = new Uint8Array(this.analyser.frequencyBinCount);

        this.source = this.context.createMediaStreamSource(stream);
        this.source.connect(this.analyser);

        this.callback = requestAnimationFrame(this.animate);
    }

    on(setValue) {
        if (this.source) {
            this.callback = requestAnimationFrame(this.animate);
            return;
        }
        this.setValue = setValue;
        navigator.mediaDevices.getUserMedia({ audio: true }).then(this.set);
    }

    off() {
        cancelAnimationFrame(this.callback);
        this.callback = null;
    }
}

export default new Mic();
