export interface IJobQuery {
  title?: { $regex: RegExp };
  location?: { $regex: RegExp };
  type?: { $regex: RegExp };
  $or?: { tags: { $regex: RegExp } }[];
}
