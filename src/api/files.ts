import axios from '@/core/axios';
import { FileItem } from '@/types/files.js';

type FileType = "all" | "photos" | "trash";

export const getAllFiles = async (type: FileType = "all"): Promise<FileItem[]> => {
  return (await axios.get("/files?type=" + type)).data;
};