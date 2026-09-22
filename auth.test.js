import { signup, login } from './auth';

test('Successful signup', () => {
    const result = signup('Achinta', 'achinta@gmail.com', '1234');

    expect(result.success).toBe(true);
    expect(result.message).toBe('Signup successful');
});

test('Duplicate signup', () => {
    signup('Achinta', 'achinta@gmail.com', '1234');

    const result = signup('Another', 'achinta@gmail.com', '5678');

    expect(result.success).toBe(false);
    expect(result.message).toBe('User already exists');
});

test('Successful login', () => {
    signup('Kiran', 'kiran@gmail.com', '1234');

    const result = login('kiran@gmail.com', '1234');

    expect(result.success).toBe(true);
    expect(result.message).toBe('Login successful');
});

test('Invalid password', () => {
    signup('Sri', 'sri@gmail.com', '1234');

    const result = login('sri@gmail.com', 'wrong');

    expect(result.success).toBe(false);
    expect(result.message).toBe('Invalid password');
});