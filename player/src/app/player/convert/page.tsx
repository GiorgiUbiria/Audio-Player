"use client";

import { convertYtVideo } from "../actions";

export default function Page() {
  return (
    <div>
      <form>
        <label htmlFor="video_url">
          Video Url:
          <input type="text" id="video_url" name="video_url" required />
        </label>

        <label htmlFor="file_name">
          File Name:
          <input type="text" id="file_name" name="file_name" required />
        </label>

        <button formAction={convertYtVideo}>Convert</button>
      </form>
    </div>
  );
}
