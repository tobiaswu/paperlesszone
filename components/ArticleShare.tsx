'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import {
  PiClipboardTextLight,
  PiCodeSimpleLight,
  PiEnvelopeLight,
  PiFacebookLogoLight,
  PiLinkedinLogoLight,
  PiShareFatLight,
  PiTelegramLogoLight,
  PiWhatsappLogoLight,
} from 'react-icons/pi';

interface ArticleShareProps {
  btnCopyText: string;
  btnText: string;
  clipboardMsg: string;
  emailText: string;
  embedText: string;
  shareLinkText: string;
  title: string;
}

export const ArticleShare = ({
  btnCopyText,
  btnText,
  clipboardMsg,
  emailText,
  embedText,
  shareLinkText,
  title,
}: ArticleShareProps) => {
  const [open, setOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const pathname = usePathname();

  const shareUrl = `https://digitizerspace.com${pathname}`;

  const embedCode = `<div><iframe src=${shareUrl} width="100%" height="790px" style={{ border: 0 }}></iframe><br />Brought to you by&nbsp;<a href="https://digitizerspace.com" target="_blank">DigitizerSpace</a></div>`;

  const handleEmbedClick = () => {
    navigator.clipboard.writeText(embedCode).then(() => setToastOpen(true));
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shareUrl).then(() => setToastOpen(true));
  };

  const handleCloseClick = () => {
    setOpen(false);
    setToastOpen(false);
  };

  return (
    <div>
      <button className="btn btn-accent btn-sm" onClick={() => setOpen(true)}>
        <PiShareFatLight className="text-2xl" />
        {btnText}
      </button>

      {toastOpen && (
        <div className="toast toast-bottom toast-center z-20">
          <div className="alert alert-info">
            <PiClipboardTextLight className="text-2xl" />
            <span>{clipboardMsg}</span>
          </div>
        </div>
      )}

      {open && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-gunmetal-400 opacity-80 z-10"></div>
          <div className="fixed bg-neutral p-4 sm:p-8 z-20 border border-gunmetal-600 border-opacity-30 rounded-lg top-1/4 left-1/4 w-full sm:w-auto sm:top-1/2 sm:left-1/2 transform -translate-x-1/4 sm:-translate-x-1/2 -translate-y-1/4 sm:-translate-y-1/2 shadow-2xl">
            <div className="relative">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0"
                onClick={handleCloseClick}
              >
                ✕
              </button>
              <h3 className="font-bold text-2xl pb-8">{title}</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 items-center justify-evenly">
                <div className="flex flex-col items-center gap-2">
                  <button className="btn btn-circle" onClick={handleEmbedClick}>
                    <PiCodeSimpleLight className="text-2xl" />
                  </button>
                  <label className="label-text">{embedText}</label>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Link href={`whatsapp://send?text=${shareUrl}`}>
                    <button className="btn btn-circle">
                      <PiWhatsappLogoLight className="text-2xl" />
                    </button>
                  </Link>
                  <label className="label-text">WhatsApp</label>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Link href={`https://t.me/share/url?url=${shareUrl}`}>
                    <button className="btn btn-circle">
                      <PiTelegramLogoLight className="text-2xl" />
                    </button>
                  </Link>
                  <label className="label-text">Telegram</label>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  >
                    <button className="btn btn-circle">
                      <PiFacebookLogoLight className="text-2xl" />
                    </button>
                  </Link>
                  <label className="label-text">Facebook</label>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Link
                    href={`https://twitter.com/intent/tweet?text=${shareUrl}`}
                  >
                    <button className="btn btn-circle">
                      <BsTwitterX className="text-2xl" />
                    </button>
                  </Link>
                  <label className="label-text">X</label>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Link
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
                  >
                    <button className="btn btn-circle">
                      <PiLinkedinLogoLight className="text-2xl" />
                    </button>
                  </Link>
                  <label className="label-text">LinkedIn</label>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Link href={`mailto:?body=${shareUrl}`}>
                    <button className="btn btn-circle">
                      <PiEnvelopeLight className="text-2xl" />
                    </button>
                  </Link>
                  <label className="label-text">{emailText}</label>
                </div>
              </div>

              <p className="pb-2 pt-6 font-bold">{shareLinkText}</p>
              <div className="join w-full">
                <input
                  className="input input-bordered input-ghost join-item w-full"
                  readOnly
                  type="url"
                  value={shareUrl}
                />
                <button
                  className="btn btn-primary join-item"
                  onClick={handleCopyClick}
                >
                  {btnCopyText}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
