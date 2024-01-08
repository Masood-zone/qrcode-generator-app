import React, { useEffect, useState } from "react";

function GeneratorBox() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState();

  useEffect(() => {
    const data = `https://api.qrserver.com/v1/create-qr-code/?data=${
      text ? text : "KiritoBest"
    }&amp;size=200x200`;

    setResponse(data);
  }, [text, response]);

  return (
    <div className="card w-96 rounded card-bordered card-normal bg-base-100 shadow-lg">
      <div className="card-body items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <label htmlFor="name">Name of QR-Code</label>
          <input
            type="text"
            placeholder="Enter text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input input-bordered py-3"
          />
        </div>

        <img
          src={
            response
              ? response
              : "https://api.qrserver.com/v1/create-qr-code/?data=KiritoBest&amp;size=200x200"
          }
          alt="Qr code"
          className="py-3"
        />
      </div>
    </div>
  );
}

export default GeneratorBox;
