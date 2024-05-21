import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CommunityType, PostType, ScheduleType } from '../models/type';
import { getCommunity } from '../Api/community';

export interface CommunityStoreType {
    community: CommunityType[]
    selectedCommunity: CommunityType
    selectedVote: ScheduleType
    editPost: PostType
    fetchCommunity: () => Promise<any>
    selectCommunity: (by: CommunityType) => void
    selectVote: (by: ScheduleType) => void
    edit: (by: PostType) => void
}

const communityStore = create<CommunityStoreType>()(
  devtools((set) => ({
    community: [],
    selectedCommunity: {
      id: "",
      thumbnail_url: "",
      description: "",
      tag1: "",
      tag2: "",
      area: "",
      communityName: "",
      member: [],
      posts: [],
      schedule: [],
      last_chat_time: "",
      isPublic: "",
      isPopular: false,
      isNew: true,
    },
    selectedVote: {
      id: "",
      scheduleTitle: "",
      scheduleDescription: "",
      scheduleLocation: "",
      scheduleDate: "",
      scheduleTime: "",
      users: [],
    },
    editPost: {
      id: "",
      content: "",
      comments: [],
      likeLists: [],
      author: "",
      authorImg: "",
    },
    fetchCommunity: async () => {
      const res = await getCommunity();
      set({community: res},false,'fetchCommunity');
    },
    selectCommunity: (by: CommunityType) => set(({selectedCommunity: by}), false, 'selectCommunity'),
    selectVote: (by: ScheduleType) => set(({selectedVote: by}), false, 'selectVote'),
    edit: (by: PostType) => set(({editPost: by}), false, 'editPost'),
  }))
);



export default communityStore;

