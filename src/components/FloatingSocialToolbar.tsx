import React, { useState } from 'react';
import { WhatsApp, Telegram, Instagram, MessageCircle, X, ChevronRight } from 'lucide-react';

const FloatingSocialToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState<string | null>(null);

  const socialChannels = [
    {
      id: 'whatsapp1',
      name: 'واتساپ ۱',
      icon: <WhatsApp className="h-5 w-5" />,
      url: 'https://chat.whatsapp.com/CGCLTGEoouVEfgybJMlWw8?mode=wwc',
      color: 'bg-green-500 hover:bg-green-600',
      textColor: 'text-green-500',
      description: 'گروه واتساپ پشتیبانی ۱'
    },
    {
      id: 'whatsapp2',
      name: 'واتساپ ۲',
      icon: <WhatsApp className="h-5 w-5" />,
      url: 'https://chat.whatsapp.com/KswfWmJSRAsGI5TAHVO1Hi',
      color: 'bg-green-600 hover:bg-green-700',
      textColor: 'text-green-600',
      description: 'گروه واتساپ پشتیبانی ۲'
    },
    {
      id: 'telegram',
      name: 'تلگرام',
      icon: <Telegram className="h-5 w-5" />,
      url: 'https://t.me/pinparts',
      color: 'bg-blue-500 hover:bg-blue-600',
      textColor: 'text-blue-500',
      description: 'کانال تلگرام رسمی'
    },
    {
      id: 'instagram',
      name: 'اینستاگرام',
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://instagram.com/pinparts',
      color: 'bg-pink-500 hover:bg-pink-600',
      textColor: 'text-pink-500',
      description: 'صفحه اینستاگرام'
    }
  ];

  const handleChannelClick = (channelId: string, url: string) => {
    setActiveChannel(channelId);
    window.open(url, '_blank');
  };

  const handleClose = () => {
    setIsOpen(false);
    setActiveChannel(null);
  };

  return (
    <>
      {/* Floating Toolbar Button */}
      <div className="fixed left-4 bottom-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group"
          aria-label="کانال های ارتباطی"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
          )}
        </button>

        {/* Tooltip when closed */}
        {!isOpen && (
          <div className="absolute left-16 bottom-4 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <div className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <span>کانال های ارتباطی</span>
            </div>
          </div>
        )}
      </div>

      {/* Expanded Toolbar */}
      {isOpen && (
        <div className="fixed left-4 bottom-20 z-50">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-80">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">کانال های ارتباطی</h3>
                    <p className="text-blue-100 text-sm">دسترسی سریع به پشتیبانی</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1 text-white/80 hover:text-white transition-colors"
                  aria-label="بستن"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Channels List */}
            <div className="p-4">
              <div className="space-y-3">
                {socialChannels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => handleChannelClick(channel.id, channel.url)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                      activeChannel === channel.id
                        ? 'border-blue-300 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${channel.color} text-white`}>
                      {channel.icon}
                    </div>
                    <div className="flex-1 text-right">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${channel.textColor}`}>
                          {channel.name}
                        </span>
                        <span className="text-xs text-gray-500">{channel.description}</span>
                      </div>
                      <div className="mt-1">
                        <span className="text-xs text-gray-600 truncate block">
                          {channel.url.replace('https://', '')}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-green-600 font-bold text-lg">۲ گروه</div>
                    <div className="text-green-700 text-xs">واتساپ</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="text-blue-600 font-bold text-lg">۲ کانال</div>
                    <div className="text-blue-700 text-xs">شبکه‌های اجتماعی</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  پاسخگویی ۲۴ ساعته | پشتیبانی فنی و فروش
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default FloatingSocialToolbar;