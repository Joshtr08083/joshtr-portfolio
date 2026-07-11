import { PositionProps } from "@/app/components/PageModules/types.d"

export interface SectionProps extends PositionProps {
    type: string;
    module_data: any;
    paddingTop?: number;
    paddingBottom?: number;
    rounded?: boolean;
    backgroundColor?: string;
    showBack?: boolean;
}