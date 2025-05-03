export type ResumeSchema = {
    version: "0.0.1";
    format: "orf";
    meta: {
        name: string;
        sort?: "chrono";
        sort_order?: "asc";
        tags?: string[];
    };
    data: {
        personal: {
            name: string;
            phone_number: string;
            email: string;
            country_code?: string;
            address_line_1?: string | null;
            address_line_2?: string | null;
            city?: string;
            state?: string;
            country?: string;
            url_linkedin?: string | null;
            url_website?: string | null;
            url_portfolio?: string | null;
            url_other?: (string | null)[];
        };
        education?: {
            degree_level: string;
            degree_title: string;
            completed: boolean;
            institution: string;
            institution_city?: string;
            institution_state?: string;
            institution_zip?: string | null;
            institution_country?: string | null;
            major?: string;
            concentration?: string | null;
            minor?: string | null;
            gpa?: string | null;
            gpa_scale?: string | null;
            start_day?: number | null;
            start_month?: number | null;
            start_year: number;
            end_day?: number | null;
            end_month?: number | null;
            end_year: number;
        }[];
        experience?: {
            title: string;
            employer: string;
            employer_city?: string;
            employer_state?: string;
            employer_country?: string | null;
            description?: string[];
        }[];
        summary?: string;
        projects?: {
            title: string;
            sub_title?: string;
            url?: string;
            description?: string[];
        }[];
        publication?: {
            title: string;
            url?: string;
            year: number;
            month: number;
            doi?: string;
            citation_style?: "apa" | "chicago" | "mla" | "iee";
            authors?: {
                first: string;
                last: string;
            }[];
        }[];
    };
};