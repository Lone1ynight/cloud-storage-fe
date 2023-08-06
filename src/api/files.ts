import axios, { setupAxiosWithToken } from '@/core/axios';
import { FileItem } from '@/types/files';
import { NextPageContext } from 'next';

type FileType = "all" | "photos" | "trash";

export const getAllFiles = async (type: FileType = "all", ctx: NextPageContext): Promise<FileItem[]> => {
  const axiosWithToken = setupAxiosWithToken(ctx);
  return (await axiosWithToken.get("/files?type=" + type)).data;
};

export const removeFiles = async (fileIds: number []): Promise<void> => {
  return await axios.delete("/files?ids=" + fileIds)
}