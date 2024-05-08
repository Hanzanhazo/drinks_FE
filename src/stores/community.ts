import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CommunityType, MemberType } from '../models/type';
import { getCommunity, joinCommunity } from '../Api/community';

export interface CommunityStoreType {
    community: CommunityType[]
    selectedCommunity: CommunityType
    fetchCommunity: () => void
    selectCommunity: (by: CommunityType) => void
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
      last_chat_time: "",
      isPublic: "",
      isPopular: false,
      isNew: true,
    },
    fetchCommunity: async () => {
      const res = await getCommunity();
      set({community: res});
    },
    selectCommunity: (by: CommunityType) => set(({selectedCommunity: by}), false, 'selectCommunity'),
  }))
);



export default communityStore;

