import { PropType } from 'vue';
interface VideosType {
    id?: number | string;
    mainUrl: string;
    videoUrl: string;
}
interface ImagesType {
    smallImgUrl: string;
    bigImgUrl: string;
    imgUrl: string;
}

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    headerType: {
        type: StringConstructor;
        default: string;
    };
    imagesRows: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    };
    videos: {
        type: PropType<VideosType[]>;
        default: () => never[];
    };
    images: {
        type: PropType<ImagesType[]>;
        default: () => never[];
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    follow: {
        type: ObjectConstructor;
        default: () => {};
    };
    labels: {
        type: FunctionConstructor;
        default: () => string;
    };
    operation: {
        type: PropType<string[]>;
        default: string[];
    };
}, {
    conEllipsis: import("vue").ComputedRef<string | number | true>;
    clickOperate: (t: string) => void;
    handleClick: () => void;
    clickImages: (value: any) => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clickImages" | "clickOperate")[], "click" | "clickImages" | "clickOperate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    headerType: {
        type: StringConstructor;
        default: string;
    };
    imagesRows: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    };
    videos: {
        type: PropType<VideosType[]>;
        default: () => never[];
    };
    images: {
        type: PropType<ImagesType[]>;
        default: () => never[];
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    follow: {
        type: ObjectConstructor;
        default: () => {};
    };
    labels: {
        type: FunctionConstructor;
        default: () => string;
    };
    operation: {
        type: PropType<string[]>;
        default: string[];
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClickImages?: ((...args: any[]) => any) | undefined;
    onClickOperate?: ((...args: any[]) => any) | undefined;
}, {
    ellipsis: string | number | boolean;
    info: Record<string, any>;
    videos: VideosType[];
    images: ImagesType[];
    operation: string[];
    headerType: string;
    imagesRows: string;
    follow: Record<string, any>;
    labels: Function;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutComment: typeof _default;
  }
}