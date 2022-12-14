import IComment from './IComment';

export default interface IPostsState {
  value: IComment[];
  status: 'idle' | 'pending' | 'fulfilled' | 'failed';
}
