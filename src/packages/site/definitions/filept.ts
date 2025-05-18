/**
 * FIXME 无号，未进行测试
 * 由 resource/sites/www.filept.com/config.json 自动转换而来
 */
import { ISiteMetadata } from "@ptd/site";
import { CategoryInclbookmarked, CategoryIncldead, CategorySpstate, SchemaMetadata } from "../schemas/NexusPHP";

export const siteMetadata: ISiteMetadata = {
  ...SchemaMetadata,
  version: 1,

  id: "filept",
  name: "filept",
  description: "",
  tags: ["影视", "综合"],
  timezoneOffset: "+0800",

  type: "private",
  schema: "NexusPHP",

  collaborator: ["koal"],

  urls: ["https://www.filept.com/"],

  levelRequirements: [],
  category: [CategoryIncldead, CategorySpstate, CategoryInclbookmarked],
};
