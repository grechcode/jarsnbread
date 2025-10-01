import { WORK_SHEDULE } from "@/constants";

export const isStoreOpen = () => {
  const openTime = WORK_SHEDULE.open.split(":");
  const closeTime = WORK_SHEDULE.close.split(":");
  const currentDateMS = new Date().getTime();
  const openMS = new Date().setHours(+openTime[0], +openTime[1]);
  const closeMS = new Date().setHours(+closeTime[0], +closeTime[1]);

  if (openMS > currentDateMS) {
    return { isOpen: false, sheduleDesc: "early" };
  }

  if (currentDateMS > closeMS) {
    return { isOpen: false, sheduleDesc: "late" };
  }

  return { isOpen: true, sheduleDesc: "ok" };
};
