export interface PositionProps {
    marginTop?: number | undefined;
    justifySelf?: "start" | "end" | "center" | "auto";
    marginInline?: string | number;
    marginBlock?: string | number;
}

export interface Positioning {
    positioning?: PositionProps
}

export interface TextProps extends Positioning {
    type: string;
    content: string; // (req) the actual text
    paddingInline?: number // (opt) L/R padding
    paddingBlock?: number // (opt) T/B padding
    align?: "left" | "center" | "right" | "justify" // (opt) justify-text
}

export interface ImageProps extends Positioning {
    type: string; 
    url: string; // (req) url reference to the image
    alt: string; // (req) alt text description
    title: string; // (req) title text of the image
    height: number; // (req) height of the image
    width?: number; // (opt) width of the image, defaults to 100%
    loading?: "lazy" | "eager"; // (opt) lazy load vs eager load,
    border?: boolean; // (opt) border around image
    rounded?: boolean; // (opt) beveled border edges

}

export interface DividerProps  {
    type: string;
    top: number; // (req) the distance above the line (if bottom is omitted, it will be symmetrical)
    bottom?: number; // (opt) distance below the line
    width?: number;  // (opt) width of the line
    showLine?: boolean; // (opt) whether or not to show horizontal line
    height?: number; // (opt) height of the line
    color?: string; // (opt) color of the line

}

export interface CodeProps extends Positioning {
    type: string;
    content: string; // (req) the code
    language: string; // (req) language the code is written in
    filename?: string | undefined; // (opt) name of the file the code is from, could be useful
    width?: number; // (opt) with of the code block
}

export interface HeaderProps extends Positioning{
    type: string;
    level: 1 | 2 | 3| 4 | 5 | 6; // (req) h1, h2, h3, etc.
    content: string; // (req) the actual text
    align?: "left" | "center" | "right" // (opt) text alignment
    paddingInline?: number; // (opt)  shifts text away from border
    size?: number; // (opt) font size of header
    id?: string; // (opt) id allows you to jump to the page content
}

export interface NoteProps extends Positioning {
    type: string;
    content: string; // (req) the actual text
    level: "normal" | "warning" | "critical" | "tip"; // (req) importance level of the note
    paddingBlock?: number; // (opt) padding of the note block around the content
    paddingInline?: number; // (opt) padding inline of the not block
    width?: number; // (opt) % width of note block
}

export interface ListProps extends Positioning {
    type: string;
    items: Array<string> // (req) list text
    ordered?: boolean // (opt) order vs unordered list
    paddingInline?: number // (opt) padding left/right
    paddingBlock?: number // (opt) padding top/bottom
}

export interface SectionProps extends Positioning {
    type: string;
    paddingTop?: number; // (opt) padding above section
    paddingBottom?: number; // (opt) padding below section
    rounded?: boolean; // (opt) beveled edges of border
    backgroundColor?: string; // (opt) background color
    showBack?: boolean; // (opt) show background color vs transparent
    children: React.ReactNode; // do NOT define in JSON
}
export interface SectionModuleProps extends SectionProps {
    elements: any; // (req) children modules
}

export interface GridProps extends Positioning {
    type: string;
    columns?: number; // (opt) # of columns
    dynamic?: boolean; // (opt) if dynamic, fills as many columns as will fit horizontally
    paddingInline?: number; // (opt) padding left/right
    rounded?: boolean; // (opt) rounded border edges
    backgroundColor?: string; // (opt) color of background
    showBack?: boolean; // (opt) show background color vs transparent
    gap?: number; // (opt) gap between columns
    children: React.ReactNode; // do NOT define in JSON
}
export interface GridModuleProps extends GridProps {
    elements: any; // (req) children modules
}

export interface ContainerProps extends Positioning {
    type: string;
    flex?: "col" | "row"; // (opt) flex direction
    children: React.ReactNode; // do NOT define in JSON
}
export interface ContainerModuleProps extends ContainerProps {
    elements: any; // (req) children modules
}