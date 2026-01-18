import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { theme } from '../utils/theme';

export default function TodoInput({ onAddTodo }) {
    const [text, setText] = useState('');

    const handleAdd = () => {
        if (text.trim()) {
            onAddTodo(text);
            setText('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                placeholderTextColor={theme.colors.textSecondary}
                value={text}
                onChangeText={setText}
                onSubmitEditing={handleAdd}
            />
            <TouchableOpacity
                style={[styles.addButton, !text.trim() && styles.addButtonDisabled]}
                onPress={handleAdd}
                disabled={!text.trim()}
            >
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: theme.spacing.l,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.m,
        borderRadius: theme.borderRadius.l,
        color: theme.colors.text,
        fontSize: theme.fontSize.m,
        marginRight: theme.spacing.s,
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    addButton: {
        width: 50,
        height: 50,
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.circle,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: theme.colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    addButtonDisabled: {
        backgroundColor: theme.colors.surface,
        opacity: 0.5,
        shadowOpacity: 0,
    },
    addButtonText: {
        color: '#FFF',
        fontSize: 30,
        lineHeight: 32,
        marginTop: -2, // Visual alignment
    },
});
