export interface DataPayload {
  id: string;
  log_checksum: string;
  log_file_name: string;
  stealer_type: string;
  computer_information: {
    build_id: string;
    infection_date: string;
    ip: string;
    malware_path: string;
    username: string;
    country: string;
    os: string;
    hwid: string;
  };
  credentials: {
    url: string;
    creds: {
      username: string;
      password: string;
    }[];
  }[];
}

export interface SearchResult {
  search_id: string;
  search_consumed_credits: number;
  credits_left: number;
  next: string;
  total_items_count: number;
  items_count: number;
  data: DataPayload[];
}
