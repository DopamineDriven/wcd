import { Collection, ObjectId } from "mongodb";
import { ParsedUrlQuery } from 'querystring';

export type UriString = string;

export type UniqueString = string;

export type EntityId = number | UniqueString;

export type Category = "Technology" | "Science" | "People";

export type DateIsoString = string;

export interface Post {
    _id: ObjectId;
    id: EntityId;
    date: DateIsoString;
    category: Category;
    title: string;
    lead: string;
    content: string;
    image: UriString;
    source: UriString;
}

export interface Database {
    posts: Collection<Post>
}
