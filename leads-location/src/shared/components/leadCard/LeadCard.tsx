type LeadCardProps = {
    name: string;
    email: string;
    phone: string;
};

export default function LeadCard({name, email, phone}: LeadCardProps) {
    return (
        <div className="w-60 h-72 border-2 rounded">
            <input disabled value={name} />
            <input disabled value={email} />
            <input disabled value={phone} />
        </div>
    )
}
