import { NextImage } from "codiedigital/dist/cjs/components/data";

interface IAccountType {
  imageSrc: string;
  title: string;
}

export function AccountType({ accountInfo }: { accountInfo: IAccountType }) {
  return (
    <>
      <a href="/login" className="account">
        <div className="box-image">
          <NextImage src={accountInfo.imageSrc} />
        </div>

        <h2 className="font-24-semibold"> {accountInfo.title}</h2>
      </a>
    </>
  );
}
