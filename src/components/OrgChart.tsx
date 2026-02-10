"use client";

const team = [
    { name: "Emmanuel Njenga", role: "Founder & Principal Architect", depth: 0 },
    { name: "Sarah M.", role: "Head of Operations", depth: 1 },
    { name: "David K.", role: "Lead Systems Engineer", depth: 1 },
    { name: "Anita W.", role: "Product Designer", depth: 2 },
    { name: "Brian J.", role: "DevOps Engineer", depth: 2 },
];

export function OrgChart() {
    return (
        <section className="py-20 px-6 bg-muted/10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-center mb-12">Leadership & Team Structure</h2>
                <div className="relative border-l-2 border-border/50 ml-6 md:ml-auto md:w-2/3 space-y-8 pl-8 md:pl-0">
                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="relative flex items-center md:items-start md:flex-row gap-4 p-4 bg-background border border-border/40 rounded-lg shadow-sm"
                            style={{ marginLeft: `${member.depth * 2}rem` }}
                        >
                            <div className="absolute -left-[34px] top-8 w-6 h-px bg-border/50 md:hidden" />
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg shrink-0">
                                {member.name[0]}
                            </div>
                            <div>
                                <div className="font-bold font-display text-lg">{member.name}</div>
                                <div className="text-sm text-muted-foreground font-serif">{member.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
