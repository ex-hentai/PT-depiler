/**
 * FIXME 无号，未进行测试
 * 由 resource/sites/npupt.com/config.json 自动转换而来
 */
import { ISiteMetadata } from "@ptd/site";
import { CategoryInclbookmarked, CategoryIncldead, CategorySpstate, SchemaMetadata } from "../schemas/NexusPHP";

export const siteMetadata: ISiteMetadata = {
  ...SchemaMetadata,
  version: 1,

  id: "npubits",
  name: "NPUBits",
  description: "界面独具一格的教育网站点",
  tags: ["教育网", "综合"],
  timezoneOffset: "+0800",

  type: "private",
  schema: "NexusPHP",

  collaborator: ["Rhilip", "xfl03"],

  urls: ["https://npupt.com/"],

  levelRequirements: [],
  category: [CategoryIncldead, CategorySpstate, CategoryInclbookmarked],
};
