import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../utils/theme';

export default function TodoFilters({ filter, onFilterChange }) { // filter: 'all' | 'active' | 'done'
    const filters = [
        { id: 'all', label: 'All' },
        { id: 'active', label: 'Active' },
        { id: 'done', label: 'Done' }
    ];

    return (
        <View style={styles.container}>
            {filters.map((f) => {
                const isActive = filter === f.id;
                return (
                    <TouchableOpacity
                        key={f.id}
                        style={[styles.chip, isActive && styles.chipActive]}
                        onPress={() => onFilterChange(f.id)}
                    >
                        <Text style={[styles.text, isActive && styles.textActive]}>
                            {f.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: theme.spacing.m,
    },
    chip: {
        paddingVertical: theme.spacing.s,
        paddingHorizontal: theme.spacing.m,
        borderRadius: theme.borderRadius.l,
        marginRight: theme.spacing.s,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderWidth: 1,
        borderColor: 'transparent',
    },
    chipActive: {
        backgroundColor: 'rgba(108, 99, 255, 0.2)', // Primary with opacity
        borderColor: theme.colors.primary,
    },
    text: {
        color: theme.colors.textSecondary,
        fontSize: theme.fontSize.s,
        fontWeight: '600',
    },
    textActive: {
        color: theme.colors.primary,
    },
});
