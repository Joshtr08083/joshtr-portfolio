import styles from "./project.module.css"

export default function Loading() {
  return (
    <div className="absolute w-full min-h-screen items-center justify-center flex flex-col text-4xl gap-10">
        <h1>Page loading...</h1>
        <span className="loading loading-spinner loading-xl" />
    </div>
    
  );
}