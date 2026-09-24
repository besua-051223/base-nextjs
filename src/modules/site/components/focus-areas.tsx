import { FocusAreaCard } from '@/modules/site/components/focus-area-card';
import { FOCUS_AREAS } from '@/modules/site/constants';

export function FocusAreas() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl leading-[1.2] font-semibold text-ink sm:text-title">
          Các định hướng <span className="text-gradient-title">trọng tâm</span>
        </h3>
        <p className="text-base leading-[25.6px] text-body sm:text-lg">
          Tiếp tục khẳng định vai trò tiên phong của tuổi trẻ Bắc Ninh trong giai đoạn phát triển
          mới
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {FOCUS_AREAS.map((area) => (
          <FocusAreaCard key={area.title} area={area} />
        ))}
      </div>
    </div>
  );
}
