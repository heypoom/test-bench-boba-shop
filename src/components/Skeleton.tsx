interface SkeletonProps {
  className?: string
}

export default function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div className={`animate-pulse-soft rounded-md bg-boba-elevated border border-boba-border ${className}`} />
  )
}
