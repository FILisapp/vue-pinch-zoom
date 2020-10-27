import { Vue } from 'vue-property-decorator';
import { InterfaceProperties}  from './interfaces';
export default class PinchZoom extends Vue {
    properties: InterfaceProperties;
    transitionDuration: number;
    doubleTap: boolean;
    doubleTapScale: number;
    autoZoomOut: boolean;
    limitZoom: number | "original image size";
    disabled: boolean;
    disablePan: boolean;
    overflow: "hidden" | "visible";
    disableZoomControl: "disable" | "never" | "auto";
    backgroundColor: string;
    limitPan: boolean;
    minScale: number;
    listeners: 'auto' | 'mouse and touch';
    wheel: boolean;
    autoHeight: boolean;
    wheelZoomFactor: number;
    draggableImage: boolean;
    _properties: InterfaceProperties;
    ivyPinch: any;
    styleObject: any;
    isZoomedIn: boolean;
    //get isTouchScreen(): boolean;
    created(): void;
    mounted(): void;
    beforeDestroy(): void;
    isDragging(): any;
    isControl(): boolean;
    getScale(): any;
    init(): void;
    getProperties(changes: any): any;
    applyOptionsDefault(defaultOptions: any, options: any): void;
    myEventHandler(event: any): void;
    toggleZoom(): void;
    pollLimitZoom(): void;
    setStyles(): void;
}

export interface IvyPinchProperties {
    element: any;
    key?: string;
    doubleTap?: boolean;
    doubleTapScale?: number;
    zoomControlScale?: number;
    transitionDuration?: number;
    autoZoomOut?: boolean;
    limitZoom?: number | "original image size";
    disablePan?: boolean;
    limitPan?: boolean;
    minScale?: number;
    eventHandler?: any;
    listeners?: "auto" | "mouse and touch";
    wheel?: boolean;
    autoHeight?: boolean;
    wheelZoomFactor?: number;
    draggableImage?: boolean;
}
export declare const IvyPinchDefaultProperties: {
    doubleTap: boolean;
    doubleTapScale: number;
    transitionDuration: number;
    limitZoom: string;
    minScale: number;
    wheel: boolean;
    wheelZoomFactor: number;
    draggableImage: boolean;
    listeners: string;
    zoomControlScale: number;
};
export declare class IvyPinch {
    properties: IvyPinchProperties;
    touches: any;
    element: any;
    elementTarget: any;
    parentElement: any;
    i: number;
    scale: number;
    initialScale: number;
    elementPosition: any;
    eventType: any;
    startX: number;
    startY: number;
    moveX: number;
    moveY: number;
    initialMoveX: number;
    initialMoveY: number;
    moveXC: number;
    moveYC: number;
    lastTap: number;
    draggingMode: boolean;
    distance: number;
    doubleTapTimeout: number;
    initialDistance: number;
    events: any;
    maxHtmlContentScale: number;
    maxScale: number;
    constructor(properties: any);
    emitEvent(properties: any): void;
    handleTouchstart: (event: any) => void;
    handleTouchend: (event: any) => void;
    handlePan: (event: any) => void;
    handleDoubleTap: (event: any) => void;
    handlePinch: (event: any) => void;
    handleWheel: (event: any) => void;
    handleResize: (_event: any) => void;
    handleLimitZoom(): void;
    getLimitZoom(): number;
    moveLeft(event: any, index?: number): number;
    moveTop(event: any, index?: number): number;
    centeringImage(): boolean;
    limitPanY(): void;
    limitPanX(): void;
    setBasicStyles(): void;
    removeBasicStyles(): void;
    setDraggableImage(): void;
    removeDraggableImage(): void;
    setImageSize(): void;
    setAutoHeight(): void;
    removeImageSize(): void;
    getElementPosition(): void;
    getTouchstartPosition(event: any): void;
    getClientPosition(event: any, index?: number): {
        clientX: any;
        clientY: any;
    };
    resetScale(): void;
    updateInitialValues(): void;
    getDistance(touches: any): number;
    getImageHeight(): any;
    getImageWidth(): any;
    transformElement(duration: any): void;
    isTouchScreen(): boolean;
    getMatchMedia(query: any): boolean;
    isDragging(): boolean;
    pollLimitZoom(): void;
    getImageElement(): any;
    toggleZoom(event?: any): void;
    setZoom(properties: {
        scale: number;
        center?: number[];
    }): void;
    alignImage(): void;
    destroy(): void;
}

export declare const defaultProperties: {
    transitionDuration: number;
    doubleTap: boolean;
    doubleTapScale: number;
    limitZoom: string;
    autoZoomOut: boolean;
    disabled: boolean;
    overflow: string;
    zoomControlScale: number;
    backgroundColor: string;
    minScale: number;
    disableZoomControl: string;
    listeners: string;
    wheel: boolean;
    wheelZoomFactor: number;
    draggableImage: boolean;
};
export declare const backwardCompatibilityProperties: {
    "transition-duration": string;
    "double-tap": string;
    "double-tap-scale": string;
    "zoom-button": string;
    "auto-zoom-out": string;
    "limit-zoom": string;
};

export interface Properties {
    element: any;
    listeners?: 'auto' | 'mouse and touch';
    resize?: boolean;
}
export declare type EventType = undefined | 'touchend' | 'pan' | 'pinch' | 'horizontal-swipe' | 'vertical-swipe' | 'tap' | 'longtap';
export declare type TouchHandler = 'handleTouchstart' | 'handleTouchmove' | 'handleTouchend';
export declare type MouseHandler = 'handleMousedown' | 'handleMousemove' | 'handleMouseup';
export declare class Touches {
    properties: InterfaceProperties;
    element: any;
    elementPosition: ClientRect;
    eventType: EventType;
    handlers: any;
    startX: number;
    startY: number;
    lastTap: number;
    doubleTapTimeout: any;
    doubleTapMinTimeout: number;
    tapMinTimeout: number;
    touchstartTime: number;
    i: number;
    isMousedown: boolean;
    touchListeners: any;
    mouseListeners: any;
    otherListeners: any;
    constructor(properties: InterfaceProperties);
    destroy(): void;
    toggleEventListeners(action: 'addEventListener' | 'removeEventListener'): void;
    handleTouchstart: (event: any) => void;
    handleTouchmove: (event: any) => void;
    handleLinearSwipe(event: any): void;
    handleTouchend: (event: any) => void;
    handleMousedown: (event: any) => void;
    handleMousemove: (event: any) => void;
    handleMouseup: (event: any) => void;
    handleWheel: (event: any) => void;
    handleResize: (event: any) => void;
    runHandler(eventName: any, response: any): void;
    detectPan(touches: any): boolean;
    detectDoubleTap(): boolean;
    detectTap(): void;
    detectPinch(event: any): boolean;
    detectLinearSwipe(event: any): "horizontal-swipe" | "vertical-swipe";
    getLinearSwipeType(event: any): "horizontal-swipe" | "vertical-swipe";
    getElementPosition(): DOMRect;
    getTouchstartPosition(event: any): void;
    getMousedownPosition(event: any): void;
    moveLeft(index: any, event: any): number;
    moveTop(index: any, event: any): number;
    detectTouchScreen(): boolean;
    on(event: EventType, handler: Function): void;
}
