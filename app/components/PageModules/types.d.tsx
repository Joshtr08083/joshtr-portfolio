export interface PositionProps {
    marginTop?: number;
    justify?: "start" | "end" | "center" | "auto"
}

export interface Positioning {
    positioning?: PositionProps
}

export interface TextProps extends Positioning {
    type: string;
    content: string; // (required) the actual text
    paddingInline?: number // (opt) L/R padding
    paddingBlock?: number // (opt) T/B padding
}

export interface ImageProps extends Positioning {
    type: string; 
    url: string; // (required) url reference to the image
    alt: string; // (required) alt text description
    title: string; // (required) title text of the image
    height: number; // (required) height of the image
    width?: number; // (opt) width of the image, defaults to 100%
    loading?: "lazy" | "eager"; // (opt) lazy load vs eager load,
    border?: boolean;
    rounded?: boolean;

}

export interface DividerProps  {
    type: string;
    top: number; // (required) the distance above the line (if bottom is omitted, it will be symmetrical)
    bottom?: number; // (opt) distance below the line
    width?: number;  // (opt) width of the line
    showLine?: boolean; // (opt) whether or not to show horizontal line
    height?: number; // (opt) height of the line
    color?: string; // (opt) color of the line

}

export interface CodeProps extends Positioning {
    type: string;
    content: string; // (required) the code
    language: string; // (required) language the code is written in
    filename?: string | undefined; // (opt) name of the file the code is from, could be useful
    width?: number; // (opt) with of the code block
}

export interface HeaderProps extends Positioning{
    type: string;
    level: 1 | 2 | 3| 4 | 5 | 6; // (required) h1, h2, h3, etc.
    content: string; // (required) the actual text
    align?: "left" | "center" | "right" // (opt) text alignment
    paddingInline?: number; // (opt)  shifts text away from border
    size?: number; // (opt) font size of header
    id?: string; // (opt) id allows you to jump to the page content
}

export interface NoteProps extends Positioning {
    type: string;
    content: string; // (required) the actual text
    level: "normal" | "warning" | "critical" | "tip"; // (required) importance level of the note
    paddingBlock?: number; // (opt) padding of the note block around the content
    paddingInline?: number; // (opt) padding inline of the not block
    width?: number; 
}

export interface ListProps extends Positioning {
    type: string;
    items: Array<string>
    ordered?: boolean
    paddingInline?: number
    paddingBlock?: number
}

export interface SectionProps extends Positioning {
    type: string;
    paddingTop?: number;
    paddingBottom?: number;
    rounded?: boolean;
    backgroundColor?: string;
    showBack?: boolean;
    children: React.ReactNode;
}
export interface SectionModuleProps extends SectionProps {
    elements: any;
}

export interface GridProps extends Positioning {
    type: string;
    columns: number;
    padding?: number;
    rounded?: boolean;
    backgroundColor?: string;
    showBack?: boolean;
    children: React.ReactNode;
}
export interface GridModuleProps extends GridProps {
    elements: any;
}

export interface ContainerProps extends Positioning {
    type: string;
    children: React.ReactNode;
    flex?: "col" | "row"
}
export interface ContainerModuleProps extends ContainerProps {
    elements: any;
}