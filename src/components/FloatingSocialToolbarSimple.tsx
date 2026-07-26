import React, { useState } from 'react';
import { WhatsApp, Telegram, Instagram, MessageCircle, X } from 'lucide-react';

const FloatingSocialToolbarSimple: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialChannels = [
    {
      id: 'whatsapp1',
      name: 'واتساپ ۱',
      icon: <WhatsApp className="h-5 w-5" />,
      url: 'https://chat.whatsapp.com/CGCLTGEoouVEfgybJMlWw8?mode=wwc',
      color: 'bg-green-500'
    },
    {
      id: 'whatsapp2',
      name: 'واتساپ ۲',
      icon: <WhatsApp className="h-5 w-5" />,
      url: 'https://chat.whatsapp.com/KswfWmJSRAsGI5TAHVO1Hi',
      color: 'bg-green-600'
    },
    {
      id: 'telegram',
      name: 'تلگرام',
      icon: <Telegram className="h-5 w-5" />,
      url: 'https://t.me/pinparts',
      color: 'bg-blue-500'
    },
    {
      id: 'instagram',
      name: 'اینستاگرام',
      icon: <Instagram className="h-5 w-5" />,
      url: 'https://instagram.com/pinparts',
      color: 'bg-pink-500'
    }
  ];

  const handleChannelClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating Button - با z-index خیلی بالا */}
      <div className="fixed left-4 bottom-4 z-[9999]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="کانال های ارتباطی"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Expanded Toolbar */}
      {isOpen && (
        <div className="fixed left-4 bottom-20 z-[9998]">
          <div className="bg-white rounded-lg shadow-lg border border-gray-300 w-64">
            <div className="p-3 bg-blue-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">کانال های ارتباطی</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="p-3">
              <div className="space-y-2">
                {socialChannels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => handleChannelClick(channel.url)}
                    className="w-full flex items-center gap-2 p-2 rounded hover:bg-gray-100 transition-colors"
                  >
                    <div className={`p-2 rounded ${channel.color} text-white`}>
                      {channel.icon}
                    </div>
                    <span className="text-sm text-gray-700">{channel.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-[9997]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingSocialToolbarSimple;