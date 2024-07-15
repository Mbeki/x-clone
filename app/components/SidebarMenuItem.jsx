function SidebarMenuItem({ text, Icon, active }) {
  return (
    <div className='hover-effect flex items-center justify-center space-x-3 text-lg text-gray-700 xl:justify-start'>
      <Icon size={24} />
      <span className={`capitalize ${active && 'font-bold'} hidden xl:inline`}>
        {text}{' '}
      </span>
    </div>
  );
}

export default SidebarMenuItem;
