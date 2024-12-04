export function VideoSection() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#252422] mb-4">
            See Dunefox in Action
          </h2>
          <p className="text-lg text-[#403D39] max-w-2xl mx-auto">
            Watch how our intelligent solutions transform business communication
            and drive results.
          </p>
        </div>

        {/* Video Section */}
        <div className="aspect-w-16 aspect-h-9 bg-[#252422] rounded-xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/example-video-id"
            title="Dunefox Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
