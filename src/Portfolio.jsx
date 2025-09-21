export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold">Nguyen Viet Hoang</h1>
        <p className="text-lg text-gray-400 mt-4">
          🎬 Video Editor | Storyteller | Creative Thinker
        </p>
        <a href="#projects" className="inline-block mt-6 bg-red-500 px-6 py-2 rounded hover:bg-red-600 transition">
          Xem Project
        </a>
      </section>

      <section className="mb-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Với hơn 3 năm kinh nghiệm trong lĩnh vực dựng phim, sáng tạo nội dung và hậu kỳ video,
          tôi đã thực hiện nhiều dự án TVC, video marketing, highlight sự kiện... Đam mê kể chuyện bằng hình ảnh
          và luôn hướng đến chất lượng hình ảnh tốt nhất.
        </p>
      </section>

      <section id="projects" className="mb-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-800 p-4 rounded shadow-lg">
            <video controls className="w-full rounded" poster="/poster1.jpg">
              <source src="/video1.mp4" type="video/mp4" />
            </video>
            <p className="mt-3 text-white font-medium">TVC – Helio Center</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded shadow-lg">
            <video controls className="w-full rounded" poster="/poster2.jpg">
              <source src="/video2.mp4" type="video/mp4" />
            </video>
            <p className="mt-3 text-white font-medium">Event Highlight – Forbes Vietnam</p>
          </div>
        </div>
      </section>

      <section className="mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Tools & Skills</h2>
        <div className="flex justify-center gap-6 text-lg text-gray-400">
          <span>Premiere Pro</span>
          <span>After Effects</span>
          <span>DaVinci Resolve</span>
          <span>Photoshop</span>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Liên hệ</h2>
        <p className="text-gray-300 mb-6">📩 hoangnguyen9862@gmail.com</p>
        <a href="mailto:hoangnguyen9862@gmail.com" className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600 transition">
          Gửi Email
        </a>
      </section>
    </div>
  );
}
