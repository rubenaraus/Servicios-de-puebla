import { Type } from "@angular/core";

export interface Page {
    name: string;
    icon?: string;
    page?: Type<any>;
}
