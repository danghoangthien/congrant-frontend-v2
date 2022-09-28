import { Button } from 'antd';
import { ButtonLayout, ButtonStyle1Layout, ButtonStyle2Layout } from './Button.style';

type CustomProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLElement>;
  background?: string;
  color?: string;
  isLoading?: boolean;
  isDisable?: boolean;
};

export const CustomButton = ({
  background,
  color,
  isLoading,
  onClick,
  text,
  isDisable,
}: CustomProps): JSX.Element => {
  return (
    <>
      <ButtonLayout background={background} color={color}>
        <Button onClick={onClick} loading={isLoading} disabled={isDisable}>
          {text}
        </Button>
      </ButtonLayout>
    </>
  );
};

export const CustomButtonStyle1 = ({
  background,
  color,
  isLoading,
  onClick,
  text,
  isDisable,
}: CustomProps): JSX.Element => {
  return (
    <ButtonStyle1Layout background={background} color={color}>
      <Button onClick={onClick} loading={isLoading} disabled={isDisable}>
        {text}
      </Button>
    </ButtonStyle1Layout>
  );
};

export const CustomButtonStyle2 = ({
  background,
  color,
  isLoading,
  onClick,
  text,
  isDisable,
}: CustomProps): JSX.Element => {
  return (
    <ButtonStyle2Layout background={background} color={color}>
      <Button onClick={onClick} loading={isLoading} disabled={isDisable}>
        {text}
      </Button>
    </ButtonStyle2Layout>
  );
};
