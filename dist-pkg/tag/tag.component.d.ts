/**
 * Supported tag types for carbon v10
 */
export declare type TagType = "red" | "magenta" | "purple" | "blue" | "cyan" | "teal" | "green" | "gray" | "cool-gray" | "warm-gray";
/**
 * Component that represents a tag for labelling/categorizing using keywords
 *
 * [See demo](../../?path=/story/tag--basic)
 *
 * <example-url>../../iframe.html?id=tag--basic</example-url>
 */
export declare class Tag {
    /**
     * type of the tag determines the styling
     *
     * Reference `TagType` for v9 applications, and `TagTypeExperimental` for v10/v9 experimental mode applications
     */
    type: TagType;
    class: string;
    readonly attrClass: string;
}
