export interface Modifiers {
    ctrl: boolean;
    alt: boolean;
    shift: boolean;
    meta: boolean;
}

export class ActionOptions {
    public constructor(data: object, validate: boolean);
    public speed: number;
}

export class OffsetOptions extends ActionOptions {
    public offsetX: number;
    public offsetY: number;
}

export class MouseOptions extends OffsetOptions {
    public modifiers: Modifiers;
}

export class ClickOptions extends MouseOptions {
    public caretPos: number;
}

export class ScrollOptions extends OffsetOptions {
    public scrollToCenter?: boolean;
    public skipParentFrames?: boolean;
}

export class MoveOptions extends MouseOptions {
    public minMovingTime: number;
    public holdLeftButton: boolean;
    public skipScrolling: boolean;
    public skipDefaultDragBehavior: boolean;
}

export class TypeOptions extends ClickOptions {
    public replace: boolean;
    public paste: boolean;
    public confidential: boolean;
}

export class DragToElementOptions extends MouseOptions {
    public destinationOffsetX: number;
    public destinationOffsetY: number;
}

export class AssertionOptions {
    public constructor(data: object, validate: boolean);
    public timeout: number;
    public allowUnawaitedPromise: number;
}

export class ResizeToFitDeviceOptions {
    public constructor (obj: object, validate: boolean);
    public portraitOrientation: boolean;
}

export class PressOptions extends ActionOptions {
    public confidential: boolean;
}

export class ElementScreenshotOptions extends ActionOptions {
    public scrollTargetX: number;
    public scrollTargetY: number;
    public includeMargins: number;
    public includeBorders: number;
    public includePaddings: number;
    public crop: CropOptions;
}

export class CookieOptions {
    public constructor (obj: object, validate: boolean);
    public name: string;
    public value: string;
    public domain: string;
    public path: string;
    public expires: Date;
    public maxAge: number | 'Infinity' | '-Infinity';
    public secure: boolean;
    public httpOnly: boolean;
    public sameSite: string;
}
