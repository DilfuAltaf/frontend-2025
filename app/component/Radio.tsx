interface RadioProps {
  value: string;
  title: string;
  checked: boolean;
}

export default function RadioButton({
  value,
  title,
  checked,
  ...props
}: RadioProps & React.InputHTMLAttributes<HTMLInputElement>) {
  
  

  return (
    <div className="mb-10">
      <input 
        type="radio" 
        checked={checked}
        value={value}
        {...props} 
      />
      <span>{title}</span>
    </div>
  );
}