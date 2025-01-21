"use client";

const OpenEventLinkButton = ({ url }: { url: string }) => {
  return (
    <button
      onClick={() => {
        window.open(url, "_blank");
      }}
      className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline"
    >
      {url}
    </button>
  );
};

export default OpenEventLinkButton;
