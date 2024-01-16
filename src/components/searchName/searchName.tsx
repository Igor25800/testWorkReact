import {Form} from "react-bootstrap";
import {ChangeEvent, FC} from "react";

export interface SearchName {
    onFilterChange: (value: string) => void
}

const SearchName: FC<SearchName> = ({onFilterChange }) => {

    return (
        <div className='mt-3'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Search</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onFilterChange(event.target.value)}
                    />
                </Form.Group>
            </Form>
        </div>
    );
};

export default SearchName;