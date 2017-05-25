import { User } from './user';
import { Pancake } from './pancake';

export class Pancakes {
    title: string;
    image: string;
    description: string;
    likes: number;
    comments: number;
    showFooter: boolean;
    pancakes: [Pancake[]];
    createdAt: Date;
    createdBy: User;
}