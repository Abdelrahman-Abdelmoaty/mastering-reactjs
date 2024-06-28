import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import getPosts from "../../server/posts/getPosts";

export default function Posts() {
	const { data, error, isLoading, isError, isSuccess, isFetching } = useQuery(
		{
			queryKey: ["posts"],
			queryFn: getPosts,
		},
	);

	useEffect(() => {
		console.log(
			"error",
			error,
			"isLoading",
			isLoading,
			"isError",
			isError,
			"isSuccess",
			isSuccess,
			"isFetching",
			isFetching,
		);
		if (isSuccess) {
			console.log("Data", data);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSuccess]);

	return (
		<div>
			<h2>Posts</h2>
			{isLoading && <div>Loading...</div>}
			{isError && <div>Error: {error.message}</div>}
			{isSuccess && (
				<div>
					{/*  eslint-disable-next-line
					@typescript-eslint/no-explicit-any */}
					{data.map((post: any) => (
						<div key={post.postId}>
							<h3>{post.title}</h3>
							<p>{post.content}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
