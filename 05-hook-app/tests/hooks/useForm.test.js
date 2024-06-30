import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";


describe('test on useForm', () => {

    const initialForm = {
        name: 'Juan Jerez',
        email: 'juanjerez@gmail.com'
    };

    test('should return default values', () => {
        
        const { result } = renderHook(() => useForm(initialForm)); 
        // console.log(result.current);
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });

    });

    test('should change the name of the form', () => {

        const newName = 'Light Yagami';
        const { result } = renderHook(() => useForm(initialForm));

        act(() => {
            result.current.onInputChange({ target: { name: 'name', value: newName } });
        });

        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);

    });

    test('should reset the form', () => {

        const newName = 'Light Yagami';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newName } });
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });

});