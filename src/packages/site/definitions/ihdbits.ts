/**
 * FIXME 无号，未进行测试
 * 由 resource/sites/pt.newworld.plus/config.json 自动转换而来
 */
import { ISiteMetadata } from "@ptd/site";
import { CategoryInclbookmarked, CategoryIncldead, CategorySpstate, SchemaMetadata } from "../schemas/NexusPHP";

export const siteMetadata: ISiteMetadata = {
  ...SchemaMetadata,
  version: 1,

  id: "ihdbits",
  name: "ihdbits",
  description: "The Ultimate File Sharing Experience",
  tags: ["影视"],
  timezoneOffset: "+0800",

  type: "private",
  schema: "NexusPHP",

  collaborator: ["koal"],

  urls: ["https://pt.newworld.plus/"],

  levelRequirements: [],
  category: [CategoryIncldead, CategorySpstate, CategoryInclbookmarked],
};
