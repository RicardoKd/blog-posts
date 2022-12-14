import IPost from './IPost';

export default interface IPostsState {
  value: IPost[];
  status: 'idle' | 'pending' | 'fulfilled' | 'failed';
}
