export const actions = {
    default: async ({ request }: any) => {
        const data = await request.formData();
        const url = data.get("video_url")
        await fetch("http://localhost:8080/", {
            method: "POST",
            body: url
        })
    }
};
