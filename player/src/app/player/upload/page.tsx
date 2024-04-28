export default function Page() {
  return (
    <div>
      <form>
        <label htmlFor="audio_file">
          Audio File:
          <input type="file" id="audio_file" name="audio_file" required />
        </label>

        <button formAction={""}>Convert</button>
      </form>
    </div>
  );
}
