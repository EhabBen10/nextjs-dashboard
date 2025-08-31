import DashboardSkeleton from '@/app/ui/skeletons';
//after adding the suspends it is not loading anymore not from here anyways it is loading for each component by itself and they all
export default function Loading() {
    return <DashboardSkeleton />;
}