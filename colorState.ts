import { GlobalVariables } from './global';

const global = GlobalVariables.getInstance();

export class Context {
    private state: Color;

    constructor() {
        this.transitionTo(new White());
    }

    public transitionTo(state: Color): void {
        this.state = state;
        this.state.setContext(this);
    }

    public goForward(): void {
        this.state.nextColor();
    }

    public goBackward(): void {
        this.state.lastColor();
    }
}

abstract class Color {
    protected context: Context;
    public setContext(context: Context) {
        this.context = context;
    }

    public abstract nextColor(): void;

    public abstract lastColor(): void;
}

class White extends Color {
    constructor() {
        super();
        global.setColor('White');
    }
    public nextColor(): void {
        this.context.transitionTo(new Red());
    }

    public lastColor(): void {
        this.context.transitionTo(new Blue());
    }
}

class Red extends Color {
    constructor() {
        super();
        global.setColor('Red');
    }
    public nextColor(): void {
        this.context.transitionTo(new Black());
    }

    public lastColor(): void {
        this.context.transitionTo(new White());
    }
}

class Black extends Color {
    constructor() {
        super();
        global.setColor('Black');
    }
    public nextColor(): void {
        this.context.transitionTo(new Orange());
    }

    public lastColor(): void {
        this.context.transitionTo(new Red());
    }
}

class Orange extends Color {
    constructor() {
        super();
        global.setColor('Orange');
    }
    public nextColor(): void {
        this.context.transitionTo(new Blue());
    }

    public lastColor(): void {
        this.context.transitionTo(new Black());
    }
}

class Blue extends Color {
    constructor() {
        super();
        global.setColor('Blue');
    }

    public nextColor(): void {
        this.context.transitionTo(new White());
    }

    public lastColor(): void {
        this.context.transitionTo(new Orange());
    }
}
