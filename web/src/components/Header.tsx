type IHeaderProps = {
  title: string;
  subTitle?: string;
  size?: 'xl' | 'sm';
};

export function Header({
  title,
  subTitle,
  size = 'xl',
}: IHeaderProps) {

  return (
    <div className={`relative w-full bg-cover ${size === 'sm' ? 'h-40' : 'h-64'} bg-center flex items-center justify-center`}>

      <div className="absolute inset-0 h-full w-full bg-headerBg bg-cover bg-center" />
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-slate-950     opacity-50 lg:opacity-90" />

      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className={`relative tracking-wide z-20 ${size === 'sm' ? 'text-3xl' : 'text-5xl'} font-bold text-center text-white max-w-xl w-full`}>
          {title}
        </h1>
        {subTitle && <h2 className="text-white tracking-tight text-center">{subTitle}</h2>}
      </div>
    </div>
  );
}
