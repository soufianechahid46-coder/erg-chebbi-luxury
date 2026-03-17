export type AdminMetric = {
  label: string;
  value: string;
  hint?: string;
};

export type RecentActivityItem = {
  id: string;
  type: string;
  message: string;
  created_at: string;
};
